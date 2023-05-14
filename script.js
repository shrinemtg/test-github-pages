const slideshow = document.querySelector('.header_img');
const images = document.querySelectorAll('.header_img img');

let currentImageIndex = 0;

function nextImage() {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;
}

setInterval(nextImage, 5000);


  function showAlert() 
  {
    const alertMessage = "本当にこのサイトを開くの？開いてしまったら、あなたの生活が大きく変わるかもしれないよ？";
    const redirectUrl = "https://chat.openai.com/chat";
    
    // アラートボックスのスタイルを定義
    const alertBoxStyle =
    `
      background-color: #FFEFD5;
      border: 1px solid #FFDAB9;
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      margin-top: 10px;
    `;
    
    // アラートボックスの要素を作成し、メッセージを設定
    const alertBox = document.createElement("div");
    alertBox.style.cssText = alertBoxStyle;
    alertBox.textContent = alertMessage;
    
    // アラートボックスをリンクの横に表示
    const linkElement = event.target;
    linkElement.parentNode.appendChild(alertBox);
    
    // OKをクリックしたら ChatGPT のサイトにリダイレクト
    if (confirm(alertMessage)) {
      window.location.href = redirectUrl;
    } else {
      alertBox.remove();
    }
  }