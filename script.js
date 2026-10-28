const form = document.getElementById('route-form');
const result = document.getElementById('result');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const from = document.getElementById('from').value.trim();
  const to = document.getElementById('to').value.trim();
  if (!from || !to) return;
  result.hidden = false;
  if (from.toLowerCase() === to.toLowerCase()) {
    result.innerHTML = '<b>You are already at your destination.</b>Please enter two different locations.';
    return;
  }
  result.innerHTML = `<b>Demo journey: ${escapeHtml(from)} → ${escapeHtml(to)}</b>This starter site does not yet contain verified Mysuru bus routes, live timings, or fare data. Add verified route data to provide real journey suggestions.`;
});
function escapeHtml(value) { return value.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
