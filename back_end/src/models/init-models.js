import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _albums from  "./albums.js";
import _followers from  "./followers.js";
import _notifications from  "./notifications.js";
import _photos from  "./photos.js";
import _post_comments from  "./post_comments.js";
import _post_likes from  "./post_likes.js";
import _posts from  "./posts.js";
import _search_history from  "./search_history.js";
import _suggestions from  "./suggestions.js";
import _user_settings from  "./user_settings.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const albums = _albums.init(sequelize, DataTypes);
  const followers = _followers.init(sequelize, DataTypes);
  const notifications = _notifications.init(sequelize, DataTypes);
  const photos = _photos.init(sequelize, DataTypes);
  const post_comments = _post_comments.init(sequelize, DataTypes);
  const post_likes = _post_likes.init(sequelize, DataTypes);
  const posts = _posts.init(sequelize, DataTypes);
  const search_history = _search_history.init(sequelize, DataTypes);
  const suggestions = _suggestions.init(sequelize, DataTypes);
  const user_settings = _user_settings.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  photos.belongsTo(albums, { as: "album", foreignKey: "album_id"});
  albums.hasMany(photos, { as: "photos", foreignKey: "album_id"});
  post_comments.belongsTo(posts, { as: "post", foreignKey: "post_id"});
  posts.hasMany(post_comments, { as: "post_comments", foreignKey: "post_id"});
  post_likes.belongsTo(posts, { as: "post", foreignKey: "post_id"});
  posts.hasMany(post_likes, { as: "post_likes", foreignKey: "post_id"});
  albums.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(albums, { as: "albums", foreignKey: "user_id"});
  followers.belongsTo(users, { as: "follower", foreignKey: "follower_id"});
  users.hasMany(followers, { as: "followers", foreignKey: "follower_id"});
  followers.belongsTo(users, { as: "following", foreignKey: "following_id"});
  users.hasMany(followers, { as: "following_followers", foreignKey: "following_id"});
  notifications.belongsTo(users, { as: "receiver", foreignKey: "receiver_id"});
  users.hasMany(notifications, { as: "notifications", foreignKey: "receiver_id"});
  notifications.belongsTo(users, { as: "sender", foreignKey: "sender_id"});
  users.hasMany(notifications, { as: "sender_notifications", foreignKey: "sender_id"});
  post_comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(post_comments, { as: "post_comments", foreignKey: "user_id"});
  post_likes.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(post_likes, { as: "post_likes", foreignKey: "user_id"});
  posts.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(posts, { as: "posts", foreignKey: "user_id"});
  search_history.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(search_history, { as: "search_histories", foreignKey: "user_id"});
  suggestions.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(suggestions, { as: "suggestions", foreignKey: "user_id"});
  suggestions.belongsTo(users, { as: "suggested_user", foreignKey: "suggested_user_id"});
  users.hasMany(suggestions, { as: "suggested_user_suggestions", foreignKey: "suggested_user_id"});
  user_settings.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_settings, { as: "user_settings", foreignKey: "user_id"});

  return {
    albums,
    followers,
    notifications,
    photos,
    post_comments,
    post_likes,
    posts,
    search_history,
    suggestions,
    user_settings,
    users,
  };
}
