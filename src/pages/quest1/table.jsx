import React, { useState } from "react";
import {
  message,
  Card,
  Table,
  Pagination,
  Select,
  Avatar
} from "antd";

import req from "../../helpers/request";
import { useEffect } from "react";
import "../../style/pagination.scss";

const { Option } = Select;

const TablePage = (props) => {

  const [ loadingData, setLoadingData ]= useState(true);

  const [listForTable, setListForTable] = useState([]);
  const [listForTablePage, setListForTablePage] = useState([]);
  const [sizePage, setSizePage] = useState([8,10,20,50]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 8
  });

  const columns = [
    {
      title: "Product Name",
      dataIndex: "title",
      key: "title",
      width: '15%',
      render:(title)=>{
        return(
            <>
            <Avatar
                style={{
                  color: '#165bb9',
                  backgroundColor: '#9bbbe7',
                  fontWeight:'bold',
                  marginRight:'10px'
                }}>{title.slice(0,3).toUpperCase()}</Avatar>
            <span>
              {title}
            </span>
          </>
        )
      }
    },
    {
      title: "Product Code",
      dataIndex: "code",
      key: "code",
      width: '15%',
      align: 'center'
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: 'center',
      width: '10%'

    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: '50%',
      align: 'center'
    },
    {
      title: "Tag",
      dataIndex: "tags",
      key: "tags",
      width: '10%',
      render: tags => (
        <>
          {tags && tags.length ?
            <ul style={{padding:0}}>{
              tags.map((v,k)=>{
                return (<li style={{color: 'blue'}} key={'n_'+k}><div style={{color:'black'}}>{v}</div></li>);
              })}
            </ul>
            : ""
          }
        </>
      ),
    }
  ];

  const getListData = () => {
    setLoadingData(true);
    req
      .get({
        endpoint: "frontend/web/question/one",
      })
      .then((res) => {
        const forTable = [];
        res?.data?.map((item, index) => {
          /**
           * category: 3
           ​
           description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients"
           ​​​
           footer: "Awesome"
           ​​​
           id: 739920
           ​​​
           tags: Array(5) [ "Home", "Automotive", "Books", … ]
           ​​​
           title: "Incredible Steel Soap"
           **/
          forTable.push({
            ...item,
            key: item?.id ?? index+'_id',
            title: item.title,
            code: item.id,
            description: item?.description ?? "",
            category: item?.category ?? "",
            footer: item?.footer ?? "",
            tags: item?.tags ?? [],
          });
          return null;
        });

        setListForTablePage(forTable);

        changeDataList();

        setLoadingData(false);
      })
      .catch((err) => {
        message.error(JSON.stringify(err));
        setLoadingData(false);
      });
  };

  const changeDataList = ()=>{
    const dataT = listForTablePage.slice((pagination.current - 1) * pagination.pageSize, pagination.current * pagination.pageSize);
    setListForTable(dataT);
  }

  useEffect(() => {
    getListData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  useEffect(()=>{
    changeDataList();
  },[pagination, loadingData, sizePage])

  const onShowSizeChange = (current, pageSize)=> {
    setPagination({
      current: current,
      pageSize: pageSize
    });
  }

  return (
    <div style={{padding:20}} >
      <label>
        <h2>
          <b>
            Question 1
          </b>
        </h2>
      </label>
      <Card style={{borderRadius:10}}>
        <Table
          columns={columns}
          dataSource={listForTable}
          pagination={false}
          rowKey={(record) => record.key}
          scroll={{ x: 800 }}
          loading={loadingData}
        />
        <br/>
        <Pagination
            id={'paginationCustom1'}
            {...pagination}
            pageSizeOptions={sizePage}
            defaultPageSize={8}
            current={pagination.current}
            onChange={onShowSizeChange}
            showSizeChanger={false}
            total={listForTablePage.length}
        />

        <div className={'textPage'}>
          <span className={'textSize'}>Show</span>
          <Select defaultValue={sizePage[0]} onChange={e=>onShowSizeChange(pagination.current,parseInt(e))}>
            {sizePage.map(l => (
                <Option key={l}>{l}</Option>
            ))}
          </Select>
        </div>

      </Card>
    </div>
  );
};

export default TablePage;
