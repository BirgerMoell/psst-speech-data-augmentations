import logo from "./logokth.png";
import poster from "./poster2.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <img src={logo} className="kth-logo" alt="logo" />

          <p>
            Speech Data Augmentation for Improving Phoneme Transcriptions of
            Aphasic Speech using wav2vec 2.0 for the PSST Challenge
          </p>
        </div>
        <p>
          Birger Moëll, Jim O’Regan*, Shivam Mehta, Ambika Kirkland, Harm
          Lameris, Joakim Gustafson, Jonas Beskow
        </p>

        <img src={poster} className="poster-image"></img>

        <h4>Abstract</h4>
        <p>
          As part of the PSST challenge, we explore how data augmentations, data
          sources, and model size affect phoneme transcription accuracy on
          speech produced by individuals with aphasia. We evaluate model
          performance in terms of feature error rate (FER) and phoneme error
          rate (PER). We find that data augmentations techniques, such as pitch
          shift, improve model performance. Additionally, increasing the size of
          the model decreases FER and PER. Our experiments also show that adding
          manually-transcribed speech from non-aphasic speakers (TIMIT) improves
          performance when Room Impulse Response is used to augment the data.
          The best performing model combines aphasic and non-aphasic data and
          has a 21.0% PER and a 9.2% FER, a relative improvement of 9.8%
          compared to the baseline model on the primary outcome measurement. We
          show that data augmentation, larger model size, and additional
          non-aphasic data sources can be helpful in improving automatic phoneme
          recognition models for people with aphasia.
        </p>

        <h2>Link to paper</h2>
        <p>Coming soon</p>

        <h2>Download Models</h2>
        <p>Coming soon</p>

        <p></p>
      </header>
    </div>
  );
}

export default App;
