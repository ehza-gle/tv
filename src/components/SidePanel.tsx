export default function SidePanel() {
  return (
    <div className="sidePanel">
      <div className="iklan">

      </div>
      <div className="tv">

      </div>
      <style jsx>
        {`
            .sidePanel {
                margin: 0;
                top: 0;
                min-height : 100%;
                min-width : 20rem;
                
            }
            .iklan {
                min-height : 100%;
                background-color: black;
            }
            .tv {
                min-height : 15rem;
                background-color: red;
            }

        `}
      </style>
    </div>
  );
}
