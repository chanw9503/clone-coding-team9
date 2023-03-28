import React, { useState } from 'react'
import { StDeleteBtn, StTagOut, StTagWrap, TagForm } from './Styles'

function Tag({onChange, onKeyPress}) {
  const [hashtag, setHashtag] = useState('');
  const [hashtagList, setHashtagList] = useState([]);

  const submitTagItem = (e) => {
    if (e.key === 'Enter' && hashtag.trim() !== '') {
      setHashtagList([...hashtagList, {hashtag: hashtag.trim()}]);
      setHashtag('');
    };
  };

  const deleteTag = (name) => {
    const filteredTagList = hashtagList.filter(tag => tag.hashtag !== name);
    setHashtagList(filteredTagList);
  };

  return (
    <StTagWrap>
      <StTagOut>
        {hashtagList?.map((tag, index) => {
          return (
            <div key={index}>
              <StDeleteBtn type="button"
              onClick={() => deleteTag(tag.hashtag)}>{tag.hashtag}&nbsp;X</StDeleteBtn>
            </div>
          )
        })}
        <TagForm
          type="text"
          name="키워드"
          placeholder="#키워드" 
          value={hashtag} 
          onChange={(e) => setHashtag(e.target.value)}
          onKeyPress={submitTagItem}
          />
      </StTagOut>
    </StTagWrap>
  );
};

export default Tag;
