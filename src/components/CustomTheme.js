import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red'

const customTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#56c8d8',
            main: '#0097a7',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: red,
        spacing: {
            unit: 16
        }
    },
    typography:{
        useNextVariants: true,
    }
  });

export default customTheme