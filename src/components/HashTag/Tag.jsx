import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTags } from '../../redux/Modules/boardSlice';
import { StDeleteBtn, StTagOut, StTagWrap, TagForm } from './Styles';

function Tag({ onChange, onKeyPress, value, boardsRef, index }) {
  if (value === undefined) {
    value = [];
  }
  const [hashtag, setHashtag] = useState('');
  const [hashtagList, setHashtagList] = useState([]);
  const dispatch = useDispatch();
  const submitTagItem = (e) => {
    if (e.key === 'Enter' && hashtag.trim() !== '') {
      setHashtagList([...hashtagList, { hashtag: hashtag.trim() }]);
      setHashtag('');
    }
  };

  useEffect(() => {
    setHashtagList(value);
  }, []);

  useEffect(() => {
    const newTags = [...boardsRef.current];
    newTags[index] = {
      ...newTags[index],
      tags: hashtagList,
    };
    boardsRef.current = newTags;
  }, [JSON.stringify(hashtagList)]);

  const deleteTag = (name) => {
    const filteredTagList = hashtagList.filter((tag) => tag.hashtag !== name);
    setHashtagList(filteredTagList);
  };

  return (
    <StTagWrap>
      <StTagOut>
        {hashtagList?.map((tag, index) => {
          return (
            <div key={index}>
              <StDeleteBtn type="button" onClick={() => deleteTag(tag.hashtag)}>
                {tag.hashtag}&nbsp;X
              </StDeleteBtn>
            </div>
          );
        })}
        <TagForm
          type="text"
          name="키워드"
          placeholder="#키워드"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
          onKeyPress={submitTagItem}
          width={hashtag.length * 9 + 50}
          maxLength={'10'}
        />
      </StTagOut>
    </StTagWrap>
  );
}

export default Tag;
