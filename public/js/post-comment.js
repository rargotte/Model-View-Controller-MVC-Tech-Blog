const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log(event);

    const commentText = document.querySelector('#comment-text').value;

    if (commentText) {
        //      const response = await fetch('/api/comments/', {
        //        method: 'POST',
        //        body: JSON.stringify({ commentText }),
        //        headers: { 'Content-Type': 'application/json' },
        //      });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
