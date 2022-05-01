import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: 3% auto;
  border: 20px solid #181818;
  border-top: none;

  .heading {
    height: 150px;
    background: #7a6e5e;
    font-size: 40px;
    text-align: center;
    line-height: 140px;
  }

  .rules {
    height: fit-content;
    background: #b56554;
    margin: 3% auto;
    margin-bottom: 0;
  }

  .rules-list {
    width: 80%;
    margin: 0 auto;
    padding-top: 3%;
    padding-bottom: 3%;
    list-style-type: square;
  }

  .rules-list > li {
    margin: 3% auto;
  }

  .content {
    font-size: 24px;
  }

  @media (max-width: 700px) {
    border: 5px solid #181818;
    .heading {
      font-size: 32px;
      height: 80px;
      line-height: 80px;
    }

    .rules {
      margin: 5% auto;
      border: 0px solid #181818;
    }

    .content {
      font-size: 16px;
    }
  }
`;

function Rules() {
  return (
    <Container>
      <div className="heading">
        <h2>Rules & Regulations</h2>
      </div>

      <div className="rules">
        <ul className="rules-list">
          <li>
            <p className="content">
              Outsiders are not allowed. Only NITR students, faculty, or employees can enter the DTS
              complex with proper checking. Strict action will be taken against outsiders.
            </p>
          </li>
          <li>
            <p className="content">
              There is no Special/VIP pass this time. Any student, faculty or employee of the
              institute must carry a proper hardcopy of the ID card of this institute.
            </p>
          </li>
          <li>
            <p className="content">
              Any other means of ID proof such as NITRis, or Hall allotment letters won&apos;t be
              entertained.
            </p>
          </li>
          <li>
            <p className="content">
              Proper code of conduct is to be maintained. Violence, consumption of alcohol, theft
              etc., are highly condemnable and strict action will be taken against those involved in
              such activities.
            </p>
          </li>
          <li>
            <p className="content">
              The attendees should restrain themselves from damaging any property of the DTS
              complex; if caught doing so, strict action will be taken.
            </p>
          </li>
          <li>
            <p className="content">
              The students have an area assigned to them. They have a place on both sides of the
              reserved area for the faculty or employee. Students are not allowed to enter the
              reserved area.
            </p>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Rules;
