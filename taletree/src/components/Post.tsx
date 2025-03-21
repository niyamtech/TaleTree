// src/components/Post.tsx
import React from 'react';

type PostProps = {
  title: string;
  content: string;
  user: {
    name: string;
    avatar: string;
    role: string;
    classroom: string;
  };
  date: string;
  category: 'Announcement' | 'Reminder' | 'Event' | 'Update';
};

const Post: React.FC<PostProps> = ({ title, content, user, date, category }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{user.name}</h3>
          <p className="text-gray-600 text-sm">
            {user.role} from {user.classroom}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span
          className={`text-sm ${category === 'Announcement' ? 'text-blue-600' : category === 'Reminder' ? 'text-yellow-600' : category === 'Event' ? 'text-green-600' : 'text-purple-600'}`}
        >
          {category}
        </span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Post;
