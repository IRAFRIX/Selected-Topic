import React from 'react';

export default function FormPost() {
  const [postedData, setPostedData] = React.useState('');
  const form = React.useRef();

  const onSubmitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const formEnt = Object.fromEntries(formData.entries());

    // Specify your API endpoint for the POST request
    const apiUrl = 'https://example.com/api'; // Replace with your API endpoint

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(formEnt),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.text())
      .then((result) => setPostedData(result))
      .catch((err) => alert(err));
  };

  const inputStyle = {
    margin: '5px 0',
  };

  return (
    <div style={{ margin: '30px' }}>
      <form ref={form} onSubmit={onSubmitForm}>
        <div>ติดต่อเรา</div>
        <input type="text" name="name" size="43" placeholder="ชื่อ" style={inputStyle} /><br />
        <input type="email" name="email" size="43" placeholder="อีเมล" style={inputStyle} /><br />
        <textarea name="message" cols="40" rows="4" placeholder="ข้อความ" style={inputStyle}></textarea><br />
        <button>ตกลง</button>
      </form>
      <br />
      <div>{postedData}</div>
    </div>
  );
}
