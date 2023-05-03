import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useSelector } from 'react-redux'

import { ISearch, IState } from '../../store/modules/search/types'

import styles from './styles.module.scss'

interface IDataType {
  id: string
  name: string
  description: string
  unit: string
  quantity: number
}

const columns: ColumnsType<IDataType> = [
  {
    key: '1',
    title: 'Arquivo',
    dataIndex: 'name',
  },
  {
    key: '2',
    title: 'Descrição',
    dataIndex: 'description',
  },
  {
    key: '3',
    title: 'Un',
    dataIndex: 'unit',
  },
  {
    key: '4',
    title: 'Quantidade',
    dataIndex: 'quantity',
  },
]

function TableComponent() {
  const response = useSelector<IState, ISearch[]>((state) => state.search.items)

  return (
    <Table
      columns={columns}
      dataSource={response}
      className={styles.container}
      rowKey="pdf_id"
    />
  )
}

export default TableComponent
