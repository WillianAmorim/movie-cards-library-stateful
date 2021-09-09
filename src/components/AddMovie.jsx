import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeSubtitle (event) {
    this.setState({ subtitle: event.target.value })
  }

  handleChangeImage (event) {
    this.setState({ imagePath: event.target.value })
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">Título</label>
          <input type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChangeTitle } />
          <label data-testid="subtitle-input-label">Subtítulo</label>
          <input type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChangeSubtitle } />
          <label htmlFor="" data-testid="image-input-label">Imagem</label>
          <input type="text" value={ imagePath } data-testid="image-input" onChange={ this.handleChangeImage } />
        </form>
      </div>
    )
  }
}

export default AddMovie;
