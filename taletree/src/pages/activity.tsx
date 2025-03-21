// src/pages/ActivityPage.tsx
import React from 'react';
import Post from '@/components/Post';

const Activity: React.FC = () => {
  const posts = [
    {
      title: 'New Classroom Activity Tomorrow!',
      content:
        'We will be starting a new storytelling activity tomorrow, where kids can participate by sharing their favorite story! Please encourage them to bring in a short story they love.',
      user: {
        name: 'Alana Price',
        avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
        role: 'Lead Teacher',
        classroom: 'Classroom 5',
      },
      date: '10:43 AM',
      category: 'Event',
    },
    {
      title: 'Reminder: Parent-Teacher Meeting Next Week',
      content:
        'Just a quick reminder that the parent-teacher meeting is scheduled for next week on Monday. Please ensure to sign up for a time slot.',
      user: {
        name: 'Jessica Clarke',
        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
        role: 'Assistant Teacher',
        classroom: 'Classroom 3',
      },
      date: '9:30 AM',
      category: 'Reminder',
    },
    {
      title: 'Important Health Update: Flu Shots',
      content:
        'A friendly reminder for all parents: we will be conducting flu shots for all students next Friday. Please sign the consent form by Wednesday.',
      user: {
        name: 'Sahar Verma',
        avatar: 'https://randomuser.me/api/portraits/men/25.jpg',
        role: 'Nurse',
        classroom: 'All Classrooms',
      },
      date: '8:00 AM',
      category: 'Announcement',
    },
    {
      title: 'Fun Dance Session for Kids!',
      content:
        'The kids had so much fun today during our dance session! We explored different dance moves and worked on coordination. Check out the pictures below!',
      user: {
        name: 'Natalee Romao',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        role: 'Dance Instructor',
        classroom: 'Classroom 6',
      },
      date: '7:00 AM',
      category: 'Update',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Childcare Activity Feed</h1>
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          content={post.content}
          user={post.user}
          date={post.date}
          category={post.category}
        />
      ))}
    </div>
  );
};

export default Activity;
