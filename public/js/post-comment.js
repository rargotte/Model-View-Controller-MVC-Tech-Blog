const commentFormHandler = async (event) => {
    event.preventDefault();
    const post_id = event.submitter.id;
    const commentText = document.querySelector('#comment-text').value;

    if (commentText) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ post_id, commentText }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Failed to create the comment.');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
