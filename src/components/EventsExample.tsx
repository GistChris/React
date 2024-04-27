import React, { FC, useState, useRef} from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
const inputRef=useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
    // e.dataTransfer.files.item(1)?.size
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    //chtoby predotvratit deistvie brausera po umolchaniu
    e.preventDefault();
    setIsDrag(true);
  };
  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="upravliaemyi"/>
      <input ref={inputRef} type="text" placeholder="neupravliaemyi"/>
      <button onClick={clickHandler}>dqqdffdsf</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "green" : "red",
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
