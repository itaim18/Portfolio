// import Rive from "@rive-app/react-canvas";

// const Simple = () => <Rive src="./profile.riv" />;
// export default Simple;
export default new rive.Rive({
  src: "profile.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
});
