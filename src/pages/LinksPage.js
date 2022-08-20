import React from 'react'
import DashboardLayout from "./../layout/DashboardLayout";
import { Space, Table, Tag, Button, Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';  
import { DeleteOutlined } from '@ant-design/icons';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const handleDelete = (item) => {

}

const columns: ColumnsType<DataType> = [
  {
    title: 'Link',
    dataIndex: 'link',
    key: 'link',
    render: text => <a href="{text}">{text}</a>,
  },
  {
    title: 'Link Cortado',
    dataIndex: 'shortened_link',
    key: 'agshortened_link',
    render: text => <a href="{text}">{text}</a>,
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
          <Popconfirm title="Seguro que quieres borrarlo ?" onConfirm={() => handleDelete(record.key)}>
              <Button type="primary" icon={<DeleteOutlined />} danger>Eliminar</Button>
            </Popconfirm>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    link: 'John Brown',
    shortened_link: 'aaa',
  },
  {
    key: '2',
    link: 'https://stackoverflow.com/questions/54387120/cant-wrap-a-menu-item-with-link',
    shortened_link: '12121212',
  },
  {
    key: '2',
    link: 'John Brown 2',
    shortened_link: ' 12',
  },
  {
    key: '2',
    link: 'John Brown 2',
    shortened_link: ' 12',
  },
  {
    key: '2',
    link: 'John Brown 2',
    shortened_link: ' 12',
  },
];

export default function LinksPages() {
  return (
    <DashboardLayout>
         <Table columns={columns} dataSource={data} />
    </DashboardLayout >
  )
}
