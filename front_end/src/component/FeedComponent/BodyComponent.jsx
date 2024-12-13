import React, { useEffect, useState } from "react";
import { Dropdown, Space, Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleCaptionForPost } from "../../redux/bodyCompSlice/bodyCompSlice";
import { getListPost } from "../../utils/fectchFromAPI";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Report
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Unfollow
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Add to favorites
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Go to post
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        About this account
      </a>
    ),
  },
];

const contentStyle = {
  margin: 0,
  //   height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const BodyComponent = () => {
  const dispatch = useDispatch();
  const { captionForPost, isExpanded, maxLength } = useSelector(
    (state) => state.bodyCompReducer
  );

  const isLongCaption = captionForPost.length > maxLength;

  const [posts, setPosts] = useState([]);
  const [error, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getListPost()
      .then((res) => {
        console.log("Fetched posts:", res);
        setPosts(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching posts:", err);
        setErr("Failed to load posts.");
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bodyComp--content">
      {posts.map((post) => {
        return (
          <div key={post.post_id} className=" space-y-3">
            {/* header */}
            <div className="bodyComp--header">
              <div className="user--area">
                <img
                  src="https://i.pinimg.com/736x/0d/a6/1d/0da61d36cd088b9e8d16d40558d11dee.jpg"
                  alt=""
                  className="avt--user"
                />
                <p className="text-subtitle">{post.user.username}</p>
                <div className="circle"></div>
                <p className="text--secondary">2h</p>
              </div>
              <Space direction="vertical">
                <Space wrap>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomRight"
                  >
                    <i className="fa-light fa-ellipsis post--detail" />
                  </Dropdown>
                </Space>
              </Space>
            </div>

            {/* body */}
            <div className="bodyComp--body">
              <Carousel arrows infinite={false}>
                <div style={contentStyle}>
                  <img
                    src="https://i.pinimg.com/736x/03/7e/41/037e419b2cdbe0b5f5d5014a09a73e27.jpg"
                    alt=""
                    className="image--post"
                  />
                </div>
                <div style={contentStyle}>
                  <img
                    src="https://i.pinimg.com/736x/6f/fa/9d/6ffa9df451710aca71a677c73e6d1c95.jpg"
                    alt=""
                    className="image--post"
                  />
                </div>
                <div style={contentStyle}>
                  <img
                    src="https://i.pinimg.com/736x/5a/a6/5f/5aa65fd4582d85d072744a24fb685d2d.jpg"
                    alt=""
                    className="image--post"
                  />
                </div>
                <div style={contentStyle}>
                  <img
                    src="https://i.pinimg.com/736x/9e/cf/63/9ecf636da29006fb7497fb3548c74fb6.jpg"
                    alt=""
                    className="image--post"
                  />
                </div>
                <div style={contentStyle}>
                  <img
                    src="https://i.pinimg.com/736x/6e/6c/60/6e6c60583a14be8336965b78e5330deb.jpg"
                    alt=""
                    className="image--post"
                  />
                </div>
              </Carousel>
            </div>
            {/* Interaction */}
            <div className="bodyComp--Interaction">
              <div className="interac--item">
                <i className="fa-sharp fa-thin fa-heart icon--item icon-interact" />
                <i className="fa-sharp fa-thin fa-comment icon--item icon-interact" />
              </div>
              <i className="fa-sharp fa-thin fa-bookmark icon--item icon-interact" />
            </div>
            <p className="text-subtitle">35.020 Likes</p>
            <div className="bodyComp--Desc">
              <p className="text-subtitle">
                <span className="text-capt mr-5">{post.user.username}</span>
                {isExpanded || post.content.length < maxLength
                  ? post.content
                  : `${post.content.slice(0, maxLength)}.....`}
                {post.content.length >= maxLength && (
                  <button
                    onClick={() => dispatch(toggleCaptionForPost())}
                    className="btn-toggle-caption"
                  >
                    {isExpanded ? "hide" : "more"}
                  </button>
                )}
              </p>
            </div>

            <div className="comment--section">
              <div className="comment--list">
                <p className="">
                  View all <span>3</span> comments
                </p>
              </div>
              <textarea
                className="comment-input"
                placeholder="Add a comment"
              ></textarea>
            </div>
          </div>
        );
      })}

      {/* <div className="bodyComp--header">
        <div className="user--area">
          <img
            src="https://i.pinimg.com/736x/0d/a6/1d/0da61d36cd088b9e8d16d40558d11dee.jpg"
            alt=""
            className="avt--user"
          />
          <p className="text-subtitle">Lee Dong-wook</p>
          <div className="circle"></div>
          <p className="text--secondary">2h</p>
        </div>
        <Space direction="vertical">
          <Space wrap>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
            >
              <i className="fa-light fa-ellipsis post--detail" />
            </Dropdown>
          </Space>
        </Space>
      </div>
      <div className="bodyComp--body">
        <Carousel arrows infinite={false}>
          <div style={contentStyle}>
            <img
              src="https://i.pinimg.com/736x/03/7e/41/037e419b2cdbe0b5f5d5014a09a73e27.jpg"
              alt=""
              className="image--post"
            />
          </div>
          <div style={contentStyle}>
            <img
              src="https://i.pinimg.com/736x/6f/fa/9d/6ffa9df451710aca71a677c73e6d1c95.jpg"
              alt=""
              className="image--post"
            />
          </div>
          <div style={contentStyle}>
            <img
              src="https://i.pinimg.com/736x/5a/a6/5f/5aa65fd4582d85d072744a24fb685d2d.jpg"
              alt=""
              className="image--post"
            />
          </div>
          <div style={contentStyle}>
            <img
              src="https://i.pinimg.com/736x/9e/cf/63/9ecf636da29006fb7497fb3548c74fb6.jpg"
              alt=""
              className="image--post"
            />
          </div>
          <div style={contentStyle}>
            <img
              src="https://i.pinimg.com/736x/6e/6c/60/6e6c60583a14be8336965b78e5330deb.jpg"
              alt=""
              className="image--post"
            />
          </div>
        </Carousel>
      </div>
      <div className="bodyComp--Interaction">
        <div className="interac--item">
          <i className="fa-sharp fa-thin fa-heart icon--item icon-interact" />
          <i className="fa-sharp fa-thin fa-comment icon--item icon-interact" />
        </div>
        <i className="fa-sharp fa-thin fa-bookmark icon--item icon-interact" />
      </div>
      <p className="text-subtitle">35.020 Likes</p>
      <div className="bodyComp--Desc">
        <p className="text-subtitle">
          {" "}
          <span className="text-capt mr-5">Lee Dong-wook</span>
          {isExpanded || !isLongCaption
            ? captionForPost
            : `${captionForPost.slice(0, maxLength)}.....`}
          {isLongCaption && (
            <button
              onClick={() => dispatch(toggleCaptionForPost())}
              className="btn-toggle-caption"
            >
              {isExpanded ? "hide" : "more"}
            </button>
          )}
        </p>
      </div>
      <div className="comment--section">
        <div className="comment--list">
          <p className="">
            View all <span>3</span> comments
          </p>
        </div>
        <textarea
          className="comment-input"
          placeholder="Add a comment"
        ></textarea>
      </div> */}
    </div>
  );
};

export default BodyComponent;
