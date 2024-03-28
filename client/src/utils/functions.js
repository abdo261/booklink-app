export const checkImage = (author) => {
  if (author.books.length === 0 || !author.books[0]?.image) return "/images/default-book-cover.jpg";
  else if (author.books[0]?.image)
    return `http://localhost:8000/api/images/book_covers/${author.books[0].image}`;
 
};


export function timeAgo(timestamp) {
  const currentDate = new Date();
  const date = new Date(timestamp);

  const seconds = Math.floor((currentDate - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (years >= 1) {
      return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (days >= 1) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours >= 1) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes >= 1) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
      return 'just now';
  }
}

export const existKey = (key, object) => {
    if(!object) return
    if (key in object) return true
     else return false
  };
  export const isEmpty =(word='')=>{
return word.trim().length ===0
  }
  export const desableAuthBtn = (data) => {
    for (const key in data) {
      if (typeof data[key] !== 'string') return; 
      if (isEmpty(data[key])) {
        return true;
      }
    }
    return false; 
  };