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
    calcButton: {
        padding: '2rem',
        display: 'flex',
    },
    graphingCalculator : {
        marginTop: '5rem',
        marginRight: '25rem',
        width: '700px',
        height: '400px',
    },
    customBackground : {
        backgroundColor: colors.core.snow.dark,
    },
    calculatorBorder : {
        backgroundColor: colors.core.snow.main,
        marginTop: '5rem',
        marginLeft: '12rem',
        borderStyle: 'groove',
        borderWidth: '7px',
        padding: '2rem',
        width: '350px',
        align: 'center'
    },
    heading: {
        color: colors.primaryBlue,
        fontWeight: 'normal',
        fontSize: '3.5rem',
        textAlign: 'center',
        padding: '0px',
    },
    shareIcon: {
        margin: '0 .5rem',
        padding: '.5rem',
        borderRadius: 2,
        transition: 'background-color 100ms ease',
        '& > svg': {
            width: '3rem',
            height: '3rem',
            color: '#CFD5DC',
            verticalAlign: 'bottom',
        },
        '&:hover': {
            backgroundColor: '#132738 !important',
        },
        '&:hover > svg': {
            color: '#ffffff',
        },
        '&:focus > svg': {
            color: '#ffffff',
        },
        '&:focus': {
            backgroundColor: '#273A49 !important',
        },
    },
    experience: {
        backgroundColor: colors.core.snow.dark,
        color: colors.primaryBlue,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: '30px',
    },
    gridContainer: {
        paddingTop: '2rem',
        paddingBottom: '2rem',
        position: 'relative',
        display: 'flex !important',
        '&:focus': {
            outline: 'none',
        },
    },
    sampleBox: {
        border: '',
        boxSizing: 'border-box',
        borderRadius: '0.5rem',
        padding: '7rem 2rem',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column',

    },
    subInformation: {
        backgroundColor: colors.core.brandBlue.darkest,
        color: colors.core.snow.main,
        fontWeight: 'bold',
        fontSize: '2.5rem',
        textAlign: 'left',
        padding: '30px'
    },

    skillsHighlight: {
        fontSize: '2.0rem',
        fontWeight: 'normal',
    },

    skills: {
        backgroundColor: colors.core.snow.main,
        color: colors.primaryBlue,
        padding: '15px',
        flexDirection: 'column',
    },

    projects: {
        color: colors.primaryBlue,
        backgroundColor: colors.core.snow.main,
        padding: '15px',
    },

    projectInformation:
    {
        color: colors.core.black.main,
        backgroundColor: colors.core.snow.main,
    },

    subProjectInformation: {
        color: colors.core.brandBlue.light,
        backgroundColor: colors.core.snow.main,
        padding: '15px',
    },
    footer: {
        marginTop: '30px',
        backgroundColor: colors.core.black.main,
        color: colors.core.snow.main,
        padding: '0 0 30px 3px',
        textAlign: 'left',
    }
})