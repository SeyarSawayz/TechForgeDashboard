import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";

function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Find answers to your questesio" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.grey[200]}>
            What is React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React is a JavaScript library for building user interfaces,
            developed by Facebook. It allows developers to create reusable UI
            components and efficiently update the UI when data changes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.grey[200]}>
            What is Material-UI?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Material-UI is a popular React UI framework that implements Google's
            Material Design guidelines. It provides pre-designed React
            components that developers can use to create visually appealing and
            responsive web applications.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.grey[200]}>
            What is Formik?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Formik is a form management library for React that helps developers
            handle form state, validation, and submission. It simplifies the
            process of building and managing forms by providing utilities and
            components to streamline the development process.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.grey[200]}>
            What is Yup?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yup is a JavaScript schema validation library that works well with
            Formik and other form management solutions. It allows developers to
            define schemas for data validation, including defining data types,
            required fields, and custom validation rules.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.grey[200]}>
            How does React improve the performance of web applications?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React uses a virtual DOM (Document Object Model) to efficiently
            update the UI. When data changes, React compares the virtual DOM
            with the actual DOM and only updates the parts of the UI that have
            changed, resulting in improved performance and faster rendering.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.grey[200]}>
            How does Material-UI enhance the user experience?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Material-UI provides a set of pre-designed React components
            following Google's Material Design guidelines. These components
            offer consistent styling, responsive layouts, and interactive
            behaviors, enhancing the overall user experience of the web
            application.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.grey[200]}>
            How does Formik simplify form management in React applications?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Formik simplifies form management by handling form state,
            validation, and submission logic. It provides a declarative API for
            defining forms, integrates seamlessly with React components, and
            offers utilities for form validation and error handling, reducing
            boilerplate code and improving developer productivity.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Faq;
