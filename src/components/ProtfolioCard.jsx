import React from 'react';
import './styles/ProtfolioCard.css';


const cardData = [
    {
      title: "Eric's Website",
      body: '整合個人經歷、作品集與聯絡方式。採用 React 搭配 HTML5 和 CSS3 打造簡潔大方的頁面，並注重 SEO 最佳化來提升搜尋排名。',
      tech: [
        `${import.meta.env.BASE_URL}images/icons/react.png`,
        `${import.meta.env.BASE_URL}images/icons/html5.png`,
        `${import.meta.env.BASE_URL}images/icons/css3.png`,
        `${import.meta.env.BASE_URL}images/icons/js.png`,
      ],
      href: 'https://54hanyi.github.io/ericchen-website/',
      img: `${import.meta.env.BASE_URL}images/ericchen-website.jpg`, 
    },
    {
      title: 'react-fiverr',
      body: '開發「接包吧」接案網站的 UI，應用了 Sass 與 Vite 加速開發過程，簡潔有力得呈現網頁的排版設計。',
      tech: [
        `${import.meta.env.BASE_URL}images/icons/react.png`,
        `${import.meta.env.BASE_URL}images/icons/html5.png`,
        `${import.meta.env.BASE_URL}images/icons/sass.png`,
        `${import.meta.env.BASE_URL}images/icons/js.png`,
        `${import.meta.env.BASE_URL}images/icons/vite.png`,
      ],
      href: 'https://54hanyi.github.io/react-fiverr/',
      img: `${import.meta.env.BASE_URL}images/react-fiverr.jpg`, 
    },
    {
      title: '天氣晴不晴',
      body: '一個快速查詢台灣氣象資訊的小工具，涵蓋即時天氣數據呈現與用戶友好介面。',
      tech: [
        `${import.meta.env.BASE_URL}images/icons/react.png`,
        `${import.meta.env.BASE_URL}images/icons/html5.png`,
        `${import.meta.env.BASE_URL}images/icons/css3.png`,
        `${import.meta.env.BASE_URL}images/icons/js.png`,
      ],
      href: 'https://54hanyi.github.io/react-weather-app/',
      img: `${import.meta.env.BASE_URL}images/react-weather-app.jpg`,  
    },
    {
      title: '超級抽獎模擬器',
      body: '使用 Next.js、React、Redux 及 MUI 等技術開發，模擬遊戲內的抽獎機制，包含付費抽獎、免費重抽、抽中獎勵的機率以及抽獎歷史記錄等功能。',
      tech: [
        `${import.meta.env.BASE_URL}images/icons/react.png`,
        `${import.meta.env.BASE_URL}images/icons/redux.png`,
        `${import.meta.env.BASE_URL}images/icons/next.png`,
        `${import.meta.env.BASE_URL}images/icons/materialUI.png`,
        `${import.meta.env.BASE_URL}images/icons/ts.png`,
      ],
      href: 'https://next-ts-redux-lottery-delta.vercel.app/',
      img: `${import.meta.env.BASE_URL}images/next-ts-redux-lottery.png`,
    },
    {
      title: '放假好去處',
      body: '使用Next.js + TypeScript搭建，提供快速查詢台灣各式展覽及文藝活動的小工具。',
      tech: [
        `${import.meta.env.BASE_URL}images/icons/react.png`,
        `${import.meta.env.BASE_URL}images/icons/next.png`,
        `${import.meta.env.BASE_URL}images/icons/tailwind.png`,
        `${import.meta.env.BASE_URL}images/icons/materialUI.png`,
        `${import.meta.env.BASE_URL}images/icons/ts.png`,
      ],
      href: 'https://next-ts-where-to-play.vercel.app/',
      img: `${import.meta.env.BASE_URL}images/next-ts-whereToPlay.png`,
    },
    {
      title: '旅館訂房網',
      body: '實現會員登入、房間查詢和即時訂單功能、串接第三方 API，搭配RWD設計，並採用React + TS提升代碼可維護性與開發效率的訂房網頁。',
      tech: [
        `${import.meta.env.BASE_URL}images/icons/react.png`,
        `${import.meta.env.BASE_URL}images/icons/tailwind.png`,
        `${import.meta.env.BASE_URL}images/icons/ts.png`,
        `${import.meta.env.BASE_URL}images/icons/vite.png`,
      ],
      href: 'https://54hanyi.github.io/react-ts-roomorder/',
      img: `${import.meta.env.BASE_URL}images/react-ts-roomorder.jpg`, 
    },
];

function ProtfolioCard() {

  return (
    <>
        {cardData.slice().reverse().map((card, index) => (
            <div key={index} className="card-container">
                <div className="image-container">
                    <img src={card.img} alt={card.title} />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h2>{card.title}</h2>
                    </div>
                    <div className="card-body">
                        <p>{card.body}</p>
                    </div>
                    <div className="tech-icons">
                        {card.tech.map((techIcon, techIndex) => (
                            <img
                                key={techIndex}
                                src={techIcon}
                                alt="Technology icon"
                                className="tech-icon"
                            />
                        ))}
                    </div>
                </div>
                <div className="see-btn">
                    <button>
                        <a href={card.href} target="_blank" rel="noreferrer noopener">Try It !</a>
                    </button>
                </div>
            </div>
        ))}
    </>
  )
}

export default ProtfolioCard;