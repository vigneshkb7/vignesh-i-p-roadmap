const Progress = ({ progress }) => {
  return (
    <div className="progress">
      <div
        className="progress-fill"
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
    </div>
  );
};

export default Progress;
