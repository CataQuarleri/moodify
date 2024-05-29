import React from 'react';
import { useState, useEffect } from 'react';

// pass in props b/c we need to know what user-id(ObjectId) belongs to what comment.
const AddComments = ({ currentObjectID }) => {
  // useState b/c we need to create state inside of our components.
  const [username, setuserName] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // //put useEffect in there to fetch the data.
  //     useEffect(() => {

  //   }, [])
  // // putting an empty array triggered only once.

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send the data to an API
    console.log('Form submitted:', { username, comment });
    setSubmitted(true);
    // Clears the form
    setuserName('');
    setComment('');
  };

  return (
    <>
      <div>
        {submitted ? (
          <p>Thank you for your comment!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col w-4/12">
            {/* <div>
            <label>

            //incase we need a username validation.. but it is currently not working.

              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div> */}
            <div className="flex flex-col">
              <label htmlFor="comment" className="font-primary text-sm">
                Comment:
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                rows={2}
                cols={40}
                id="comment"
                name="comment"
                className="border-2"
              />
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="rounded-md p-1 font-primary text-sm bg-yellow-100 text-violet-100 hover:bg-turquoise-100"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default AddComments;
