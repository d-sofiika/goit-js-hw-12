export function createMarkup(obj) {
  const arr = obj.hits;
  return arr.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => `
    <li class="card-item">
        <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" class="img-web"/>
        </a>
        <div class="information">
            <div class="descr">
                <p class="text">Likes</p>
                <span class="value">${likes}</span>
            </div>
            <div class="descr">
                <p class="text">Views</p>
                <span class="value">${views}</span>
            </div>
            <div class="descr">
                <p class="text">Comments</p>
                <span class="value">${comments}</span>
            </div>
            <div class="descr">
                <p class="text">Downloads</p>
                <span class="value">${downloads}</span>
            </div>
        </div>
    </li>
    `
    )
    .join('');
}
