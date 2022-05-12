import { Box, Grid, withStyles } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import RawImage from "components/RawImage";
import TraitBackgroundImage from "components/TraitBackgroundImage";
import TraitChildBackgroundImage from "components/TraitChildBackgroundImage";
import traitsData from "components/traitsData.json";
import Link from "next/link";
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "transparent !important",
  },
});

const NavigationMenuAction = withStyles(() => ({
  root: {
    backgroundColor: "transparent !important",
    color: "black",
    ["@media (max-width:768px)"]: {
      padding: "6px 6px !important",
      minWidth: "auto !important",
    },
  },
  selected: {
    color: "White !important",
  },
  label: {
    fontSize: "1.5rem !important",
    ["@media (max-width:768px)"]: {
      fontSize: "1rem !important",
    },
  },
}))(BottomNavigationAction);

export default function Traits() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [traits, setTraits] = useState<
    { name: string; file: string; percent: number }[]
  >((traitsData as any)["Hat"]);

  const handleClick = (key: string) => {
    setTraits((traitsData as any)[key]);
  };

  return (
    <>
      <Box>
        <style jsx global>{`
          body {
            background-color: #dbe66c;
          }
        `}</style>
        <TraitBackgroundImage src="/img/traitback.png">
          <Link href="/" passHref>
            <RawImage
              src="/img/traitheader.png"
              className="w-full md:w-auto mx-auto"
            />
          </Link>
          <TraitChildBackgroundImage src="/img/traitmenu.png">
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              className={classes.root}
            >
              <NavigationMenuAction
                label="Hat"
                onClick={() => handleClick("Hat")}
              />
              <NavigationMenuAction
                label="Clothing"
                onClick={() => handleClick("Clothing")}
              />
              <NavigationMenuAction
                label="Base"
                onClick={() => handleClick("Base")}
              />
              <NavigationMenuAction
                label="Eyeswear"
                onClick={() => handleClick("Eyeswear")}
              />
              <NavigationMenuAction
                label="Accessories"
                onClick={() => handleClick("Accessories")}
              />
              <NavigationMenuAction
                label="Mouthwear"
                onClick={() => handleClick("Mouthwear")}
              />
              <NavigationMenuAction
                label="Wings"
                onClick={() => handleClick("Wings")}
              />
            </BottomNavigation>
          </TraitChildBackgroundImage>
          <Grid container spacing={2} className="py-10">
            {traits.map((trait, key) => (
              <Grid key={key} item xs={6} sm={4} md={2}>
                <Box
                  className="rounded-lg"
                  style={{ border: "4px solid #C0A85F" }}
                >
                  <RawImage
                    src={"/img/traits/" + trait.file}
                    className="mx-auto"
                  />
                  <Box className="bg-white">
                    <p style={{ fontSize: "1.2rem" }}>{trait.name}</p>
                    <p style={{ fontSize: "1.2rem" }}>{trait.percent}&nbsp;%</p>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <RawImage
            src="/img/traitfooter.png"
            className="w-full md:w-auto mx-auto"
          />
        </TraitBackgroundImage>
      </Box>
    </>
  );
}
