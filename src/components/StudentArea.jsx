import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  border: 20px solid #181818;
  border-top: 0;
  background-color: #434e42;
  display: flex;
  justify-content: center;
  padding-top: 3%;
  padding-bottom: 3%;

  @media (max-width: 700px) {
    border: 5px solid #181818;
  }
`;

const StudentsSection = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-gap: 5px;
  height: 300px;
  font-size: 26px;

  @media (max-width: 700px) {
    grid-gap: 0px;
    font-size: 12px;

    p {
      font-size: 12px;
    }
  }

  div {
    margin: 0 auto;
  }

  .students {
    background: #b18652;
    width: 100%;
    border: 5px solid #181818;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .staffs {
    background: #5384b2;
    width: 100%;
    border: 5px solid #181818;
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
  }

  .light {
    font-size: 14px;
    height: 100%;
    width: 100%;
    background: #ddd6cb;
    border: 2px solid #181818;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .light > p {
    transform: rotate(-90deg);
    text-align: center;
    margin-top: -10px;
  }

  @media (max-width: 700px) {
    .light > p {
      font-size: 12px;
      margin-top: -10px;
    }
  }

  ${
    '' /* .light > p {
    text-align: justify;
    transform-origin: 0 0;
    transform: rotate(-90deg);
  } */
  }

  .faculties,
  .non-staffs {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .non-staffs {
    width: 100%;
    background: #7ba84d;
  }
`;

function StudentArea() {
  return (
    <Wrapper>
      <StudentsSection>
        <div className="students">Students</div>
        <div className="staffs">
          <div className="faculties">
            <p>Faculties and Officers</p>
          </div>
          <div className="light">
            <p>d</p>
            <p>n</p>
            <p>u</p>
            <p>o</p>
            <p style={{ marginBottom: '10px' }}>S</p>
            <p>d</p>
            <p>n</p>
            <p style={{ marginBottom: '10px' }}>A</p>
            <p>t</p>
            <p>h</p>
            <p>g</p>
            <p>i</p>
            <p>L</p>
          </div>
          <div className="non-staffs">
            <p>Non-Teaching Staffs</p>
          </div>
        </div>
        <div className="students">Students</div>
      </StudentsSection>
    </Wrapper>
  );
}

export default StudentArea;
