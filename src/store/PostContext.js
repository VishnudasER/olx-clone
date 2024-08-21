import { createContext, useState, useEffect } from 'react';


export const PostContext = createContext(null);


function Post({ children }) {
  const [postDetails, setPostDetails] = useState(() => {
    const savedPostDetails = localStorage.getItem('postDetails');
    return savedPostDetails ? JSON.parse(savedPostDetails) : null;
  });

  useEffect(() => {
    if (postDetails) {
      localStorage.setItem('postDetails', JSON.stringify(postDetails));
    }
  }, [postDetails]);

  return (
    <PostContext.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </PostContext.Provider>
  );
}

export default Post;
