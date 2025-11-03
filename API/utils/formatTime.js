
exports.formatDate = (dateString) =>  {
  const date = new Date(dateString);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}


exports.formatTime = (dateString) => {
  const date = new Date(dateString);

  const options = { hour: 'numeric', minute: '2-digit', hour12: true };
  return date.toLocaleTimeString('en-US', options);
}

