import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Drawer,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";

// import { Radio,} from "@mui/icons-material";
const lodu = 240;
const useStyles = makeStyles({
  formsty: {
    marginTop: "20px !important",
    marginBottom: "20px !important ",
    display: "block",
  },
  btnSty: {
    background: "none",
    border: "none",
    color: "maroon",
  },
  drawers: {
    width: lodu,
  },
});
export default function Create() {
  const [set, setState] = useState("");
  const [detail, setDetail] = useState("");
  const [note, setNote] = useState([]);
  const [para, setPara] = useState([]);
  const [noteError, setNoteError] = useState(false);
  const [paraError, setParaError] = useState(false);
  const [val, setVal] = useState("aliyan");
  const [numb, setNumb] = useState([]);
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    setNoteError(false);
    setParaError(false);
    if (set === "") {
      setNoteError(true);
    }
    if (detail === "") {
      setParaError(true);
    }
    if (set && detail) {
      setNote([...note, set]);
      setPara([...para, detail]);
      setNumb([...numb, val]);
      setDetail("");
      setState("");
    }
  };
  // const handleclick = () => {
  //   setNote(null);
  // };

  return (
    <Container>
      <Drawer className={classes.drawers} variant="permanent" anchor="left">
        <Typography>Leyn Akmal</Typography>
      </Drawer>
      <Typography className={classes.typo}>Create a New Note</Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.formsty}
          color="secondary"
          variant="outlined"
          label="outlined"
          fullWidth
          required
          value={set}
          onChange={(e) => {
            setState(e.target.value);
          }}
          error={noteError}
        />
        <TextField
          className={classes.formsty}
          color="secondary"
          variant="outlined"
          label="outlined"
          fullWidth
          multiline
          rows={4}
          required
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          error={paraError}
        />
        <FormControl>
          <FormLabel>Naming Category</FormLabel>
          <RadioGroup
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          >
            <FormControlLabel
              value="aliyan"
              control={<Radio />}
              label="Aliyan"
            />
            <FormControlLabel value="akmal" control={<Radio />} label="Akmal" />
            <FormControlLabel
              value="hameed"
              control={<Radio />}
              label="Hameed"
            />
            <FormControlLabel
              value="naming"
              control={<Radio />}
              label="Naming"
            />
          </RadioGroup>
        </FormControl>
        <Button
          style={{ display: "block" }}
          type="submit"
          variant="outlined"
          color="secondary"
          className={classes.btnSty}
        >
          submit
        </Button>
      </form>

      <br />
      <ul>
        {note.map((data, i) => {
          return (
            <>
              <h4>{data}</h4>

              {/* {para.map((data, i) => {
                    return (
                      <li key={i}>
                        <p>{data}</p>
                      </li>
                    );
                  })} */}
              {/* <button key={i} className={classes.btnSty}>
                    <DeleteIcon />
                  </button> */}
              {/* </div> */}
            </>
          );
        })}
        {para.map((data, i) => {
          return <p key={i}>{data}</p>;
        })}
        {numb.map((data, i) => {
          return <p key={i}>{data}</p>;
        })}
      </ul>
    </Container>
  );
}
