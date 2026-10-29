import { Component } from "react";
import Image from "./Image";

class Content extends Component {
  state = {
    showImage: false,
    width: 200,
    birthStyle: {},
  };

  paintBirth = () => {
    this.setState({
      birthStyle: { color: "yellow", backgroundColor: "purple" },
    });
  };

  addImage = () => {
    this.setState({ showImage: true });
  };

  deleteImage = () => {
    this.setState({ showImage: false, width: 200 });
  };

  enlarge = () => {
    if (!this.state.showImage) return;
    this.setState({ width: this.state.width + 20 });
  };

  shrink = () => {
    if (!this.state.showImage) return;
    this.setState({ width: Math.max(20, this.state.width - 20) });
  };

  render() {
    const { birth, education, hobbies, films, about } = this.props;

    return (
      <main>
        <p style={this.state.birthStyle} onClick={this.paintBirth}>
          {birth}
        </p>

        <p>{education}</p>

        <h3>Мої хобі:</h3>
        <ul>
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>

        <h3>Мої улюблені фільми:</h3>
        <ol>
          {films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ol>

        <p>{about}</p>

        <div>
          {this.state.showImage && (
            <Image
              src="/Lviv.png"
              alt="Львів"
              href="https://city-adm.lviv.ua/"
              width={this.state.width}
            />
          )}
        </div>

        <p>
          <button onClick={this.addImage}>ADD</button>
          <button onClick={this.deleteImage}>DELETE</button>
          <button onClick={this.enlarge}>SCALE +</button>
          <button onClick={this.shrink}>SCALE -</button>
        </p>
      </main>
    );
  }
}

export default Content;