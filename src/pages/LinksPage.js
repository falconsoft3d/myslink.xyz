import React, {useState, useEffect} from 'react'
import DashboardLayout from "./../layout/DashboardLayout";
import { Space, Table, Button, Popconfirm, notification } from 'antd';  
import { DeleteOutlined } from '@ant-design/icons';
import {db} from "../firebase/firebaseConfig";
import {collection, onSnapshot, deleteDoc, doc, query, orderBy, where} from 'firebase/firestore';


export default function LinksPages() {
  const [links, setLinks] = useState([])
  const id = "GMhcMVr7PRbHDFKHMXOjVUni40K3"

  const columns  = [
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
      render: text => <a href="{text}">{text}</a>,
    },
    {
      title: 'Link Cortado',
      dataIndex: 'linkq',
      key: 'linkq',
      render: text => <a href="{text}">{text}</a>,
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
            <Popconfirm title="Seguro que quieres borrarlo ?" onConfirm={() => deleteItem(record.id)}>
                <Button type="primary" icon={<DeleteOutlined />} danger>Eliminar</Button>
              </Popconfirm>
        </Space>
      ),
    },
  ];

  const myquery = query(
    collection(db, 'links'),
    where('user_id', '==', id),
  );

  useEffect(() => {
    onSnapshot(myquery,
        (snapshot) => {
            const data = snapshot.docs.map((documento) => {
                return {...documento.data(), id: documento.id}
            })
            setLinks(data);
        },
        (error) => {
            console.log(error);
        }
    );
}, []);

console.log(links)


const deleteItem = async(id) => {
  console.log(id)
  try {
      await deleteDoc(doc(db, 'links', id));
  } catch(error){
      console.log('Hubo un error al intentar eliminar el usuario')
      console.log(error);
  }
}


return (
    <DashboardLayout>
      <div>
      <Button
        href='/create-link'
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Addicionar Link
      </Button>

      <Table columns={columns} dataSource={links} />
      </div>
         
    </DashboardLayout >
  )
}
