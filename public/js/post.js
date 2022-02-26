const postFormHandler = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector('#post-title').value;;
    const postContent = document.querySelector('#post-content').value;



    if (postContent) {
        const response = await fetch('/api/dashboard/post', {
            method: 'POST',
            body: JSON.stringify({ postTitle, postContent }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create the post.');
        }
    }
};

document
    .querySelector('.post-form')
    .addEventListener('submit', postFormHandler);
