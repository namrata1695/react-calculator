const coreColorPalette = {
    brandBlue : {
        light: '#5374A6',
        main: '#25477B',
        dark: '#143566',
        darkest: '#112E54',
    },
    black : {
        main : '#000000'
    },
    extra : {
        success : '#43A342',
        error: '#DE3030',
        warning: '#D5632A',
        warningIcon: '#E276640',
        grey: '#98ADBD',
        smoke: '#EAEDF1',
    },

    slate : {
        light : '#66788C',
    },

    snow : {
        main: '#FFFFFF',
        dark: '#F5F7FA'
    }

}

export const colors = {
    primaryBlue: coreColorPalette.brandBlue.main,
    primaryGreen: coreColorPalette.extra.success,
    primaryGrey: coreColorPalette.slate.light,
    core: coreColorPalette,
}