// 展开/收起详情
document.querySelectorAll('.event-card, .offer-card').forEach(card => {
  card.addEventListener('click', () => {
    const detail = card.querySelector('.details');
    if(detail) detail.style.display = (detail.style.display==='none'||detail.style.display==='')?'block':'none';
  });
});

// 搜索过滤
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  document.querySelectorAll('.event-card, .offer-card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(filter)?'block':'none';
  });
});

// 倒计时功能
function updateCountdown() {
  const today = new Date();
  document.querySelectorAll('.event-card, .offer-card').forEach(card => {
    const dateStr = card.getAttribute('data-date');
    if(!dateStr) return;
    const eventDate = new Date(dateStr + 'T00:00:00');
    const countdownEl = card.querySelector('.countdown');
    if(!countdownEl) return;
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000*60*60*24));
    if(diffDays>0) countdownEl.textContent = `Starts in ${diffDays} day${diffDays>1?'s':''}`;
    else if(diffDays===0) countdownEl.textContent='Event is today!';
    else countdownEl.textContent='Event has passed';
  });
}
updateCountdown();
setInterval(updateCountdown, 3600*1000);