import React from 'react';
import './comp-styles.css';
import ActualRecipePage from './ActualRecipePage';


export default function RecipePage({posts}) {

  return (
    <>
          {posts && posts.map((post) => {
            return (
                  <ActualRecipePage key={post.fields.slug} post={post} />
          )})}
</>
  )
}