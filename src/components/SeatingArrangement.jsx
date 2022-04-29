import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  border: 20px solid #181818;
  border-top: none;
  border-bottom: none;
  background-color: #434e42;
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    border: 5px solid #181818;
    border-bottom: none;
  }
`;

const VIP = styled.div`
  width: 90%;
  background-color: #b56554;
  border: 5px solid #181818;
  height: fit-content;
  border-top: none;

  .stage {
    width: 80%;
    height: 100px;
    line-height: 90px;
    background-color: #ddd6cb;
    margin: 0 auto;
    border: 5px solid #181818;
    margin-bottom: 5%;
    border-top: none;
  }
  .stage > p {
    text-align: center;
    font-size: 26px;
    vertical-lign: middle;
  }

  @media (max-width: 700px) {
    width: 95%;
    .stage {
      height: 60px;
      line-height: 50px;
      width: 93%;
    }
    .stage > p {
      font-size: 18px;
    }
  }

  .vip-seats {
    width: 93%;
    height: 70px;
    line-height: 60px;
    background-color: #cdae9d;
    margin: 1% auto;
    border: 5px solid #181818;
  }

  .vip-seats > p {
    text-align: center;
    font-size: 26px;
    vertical-lign: middle;
  }

  @media (max-width: 700px) {
    .vip-seats {
      line-height: 40px;
      height: 50px;
    }
    .vip-seats > p {
      font-size: 10px;
    }
  }
`;

function SeatingArrangement() {
  return (
    <Wrapper>
      <VIP>
        <div className="stage">
          <p>Stage</p>
        </div>
        <div className="vip-seats">
          <p>Director, Deans, Invited Dignitaries and President SAC</p>
        </div>
        <div className="vip-seats">
          <p>VP, SAC Officials and Security & Service Officials</p>
        </div>
      </VIP>
    </Wrapper>
  );
}

export default SeatingArrangement;
