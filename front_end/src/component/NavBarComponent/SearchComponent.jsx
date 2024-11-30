import React from "react";
import { Input, Space, ConfigProvider } from "antd";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchComponent = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#a3a3a3',  
          borderRadius: 5,           
          colorBgContainer: '#fafafa',  
          fontSize: 14,
          
                     
        },
      }}
    >
      <div className="searchPage--content">
        <p className="text--accent">Search</p>
        <Space className="input--item" direction="vertical">
          <Search
            placeholder="Search"
            allowClear
            enterButton={<span dangerouslySetInnerHTML={{ __html: '<i class="fa-sharp fa-solid fa-magnifying-glass"></i>' }} />}
            size="large"
            onSearch={onSearch}
          />
        </Space>
        <div className="searchResult">
          <hr />

        <p className="text-subtitle">Recent</p>
        <p className="text--small--bold">No recent searches.</p>




        </div>
      </div>
      
    </ConfigProvider>
  );
};

export default SearchComponent;
