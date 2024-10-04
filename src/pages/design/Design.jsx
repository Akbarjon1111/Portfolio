import "./Design.css";

const Design = () => {
  return (
    <div className="design">
      <div className="design-info">
        <div className="info1">
          <h3>Product Designer</h3>
          <h1>That's me!</h1>
        </div>
        <div className="info2">
          <p>
            Over the past 12 years, I've worked with a diverse range of <br />{" "}
            clients, from startups to Fortune 500 companies. I love crafting{" "}
            <br /> interfaces that delight users and help businesses grow.
          </p>
        </div>
      </div>
      <div className="design-img">
        <div className="img1">
          <img src="../../../src/assets/iPhone.png" alt="" />
        </div>
        <div className="img2">
          <img src="../../../src/assets/inson.png" alt="" />
        </div>
        <div className="img3">
          <img src="../../../src/assets/noutbook.png" alt="" />
          <img src="../../../src/assets/insonlar.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Design;
