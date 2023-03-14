/* //eslint-disable */

import './App.css';
import {useState} from "react";

function App() {
    let [titleList, setTitleList] = useState(['라 추천', '나 추천', '다 추천']);
    let [goodList, setGoodList] = useState([0, 0, 0]);
    let [isModal, setModal] = useState(false);
    let [modalIdx, setModalIdx] = useState(0);
    let [input, setInput] = useState('');

    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그 이름</h4>
            </div>

            <button onClick={() => {
                let copy = [...titleList];
                copy[0] = '가 추천';
                setTitleList(copy);
            }}>제목변경</button>

            <button onClick={() => {
                let copy = [...titleList];
                setTitleList(copy.sort());
            }}>asc order</button>

            {
                titleList.map((el, idx) => {
                    return (
                        <div className="list" key={idx}>
                            <h4 onClick={() => {
                                setModalIdx(idx);
                                setModal(!isModal);
                            }}>{el}
                                <span onClick={(e) => {
                                    e.stopPropagation();
                                    let copy = [...goodList];
                                    copy[idx]++
                                    setGoodList(copy)
                                }}>👍</span> {goodList[idx]}
                            </h4>
                            <p>2월 17일 발행</p>
                            <button onClick={() => {
                                let copy = [...titleList];
                                copy.splice(idx, 1);
                                setTitleList(copy);
                            }}>삭제</button>
                        </div>
                    );
                })
            }

            <input type={'text'} onChange={(e) => {
                setInput(e.target.value);
            }}/>

            <button onClick={() => {
                let copy = [...titleList];
                copy.push(input);
                setTitleList(copy);
            }}>글 추가</button>

            {
                isModal
                    ? <Modal titleList={titleList} setTitleList={setTitleList} modalIdx={modalIdx}/>
                    : null
            }
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.titleList[props.modalIdx]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                let copy = [...props.titleList];
                copy[0] = '가 추천';
                props.setTitleList(copy);
            }}>글수정</button>
        </div>
    );
}

export default App;
