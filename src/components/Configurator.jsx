import { useCustomization } from "../context/Customization";

const Configurator = () => {
  const { legs, setLegs, material, setMaterial } = useCustomization();
  console.log(material, 'material');
  return (
    <>
      <div className="configurator">
        <div className="configurator__section">
          <div className="configurator__section__title">Chair Material</div>
          <div className="configurator__section__values">
            <div
              className={`item ${material === "leather" ? "item--active" : ""}`}
              onClick={() => setMaterial("leather")}
            >
              <div className="item__label">Leather</div>
            </div>
            <div
              className={`item ${material === "fabric" ? "item--active" : ""}`}
              onClick={() => setMaterial("fabric")}
            >
              <div className="item__label">Fabric</div>
            </div>
          </div>
        </div>
        <div className="configurator__section">
          <div className="configurator__section__title">Ноги</div>
          <div className="configurator__section__values">
            <div
              className={`item ${legs === 1 ? "item--active" : ""}`}
              onClick={() => setLegs(1)}
            >
              <div className="item__label">Дизайн</div>
            </div>
            <div
              className={`item ${legs === 2 ? "item--active" : ""}`}
              onClick={() => setLegs(2)}
            >
              <div className="item__label">Модерн</div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Configurator;
