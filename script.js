var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      file: 'https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&h=350'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      file: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
    },
    {
        id: 3,
        title: 'Mała Syrenka',
        desc: 'film o syrence',
        file: 'https://as2.ftcdn.net/jpg/01/63/27/81/500_F_163278129_S1CSdDGiQWhzXXdRHfkMAf95gR1nY8wq.jpg'
    },
    {
        id: 4,
        title: 'Braveheart',
        desc: 'film o przywódcy szkockiego powstania przeciwko rządom Anglii',
        file: 'https://as1.ftcdn.net/jpg/00/01/49/38/500_F_1493842_6ZJhIXI1zwPeFz6YnciB8Shf7vFzaY.jpg'
    },
    {
        id: 5,
        title: 'Titanic',
        desc: 'film o zatonięciu statku',
        file: 'https://as2.ftcdn.net/jpg/01/57/10/79/500_F_157107915_LcIHyd3EuJD6WSIJkQ5iGpI8ywMYBLhM.jpg'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.file})
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));