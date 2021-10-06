import { colors } from './colors'
import { createStyles } from '@material-ui/core'

export const collapseStyles = createStyles({
    collapseSections: {
        cursor: 'pointer',
        padding: '1rem 0',
        position: 'relative',
    },
    collapseContainer: {
        position: 'static',
        borderTop: 'none',
    }
})

export const generalFormStyles = createStyles({
    outerLayout:{

    },
    digits : {
        marginTop: '1rem',
    },

    formSectionMargin: {
        marginBottom: '2rem',
        textAlign: 'center',
    },
    wtilabel: {
        color: colors.core.snow.main,
        marginTop: '1rem',
        marginLeft: '5rem',
    },
    wtibutton:{
        backgroundColor: colors.core.snow.main,
        marginTop: '1rem',
        textAlign: 'left',
        
        marginBottom: '1rem',
        //padding: '3px 3px 10px 10px',
    },
    wtiprice : {
        backgroundColor: colors.core.snow.main,
        marginTop: '1.25rem',
        textAlign: 'left',
        marginBottom: '1rem',
    },
    calcButton: {
        padding: '2rem',
        display: 'flex',
    },
    graphingCalculator : {
        marginTop: '3rem',
        marginRight: '25rem',
        width: '700px',
        height: '400px',
    },
    customBackground : {
        backgroundColor: colors.core.snow.dark,
    },
    wtiBackground:{
        backgroundColor: colors.core.brandBlue.dark,
        marginTop: '1rem',
        padding: '0 0 3px 3px',
        alignItems: 'center'
    },
    calculatorBorder : {
        backgroundColor: colors.core.snow.main,
        marginTop: '3rem',
        marginLeft: '12rem',
        borderStyle: 'groove',
        borderWidth: '7px',
        padding: '2rem',
        width: '350px',
        align: 'center'
    },
    footer: {
        marginTop: '1px',
        backgroundColor: colors.core.black.main,
        color: colors.core.snow.main,
        padding: '0 0 30px 3px',
        textAlign: 'left',
    }
})