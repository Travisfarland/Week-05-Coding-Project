class BandMember {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

class Band {
    constructor(name) {
        this.name = name;
        this.bandmembers = [];
    }

    addBandMemeber(bandmember) {
        if (bandmember instanceof bandmember) {
            this.bandmembers.push(bandmember);
        } else {
            throw new Error(`You can only add an instance of BandMember. Argument is not a bandmember: ${bandmember}`)
        }
    }

    describe() {
        return `${this.name} has ${this.bandmembers.length} players`;
    }
}

class Menu {
    constructor() {
        this.bands =[];
        this.selectedband = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createband();
                    break;
                case '2':
                    this.viewband();
                    break;
                case '3':
                    this.deleteband();
                    break;
                case '4':
                    this.displayband();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions()
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new band
            2) view band
            3) delete band
            4) display band
        `);
    }
    
    showbandMenuOptions(bandInfo) {
        return prompt(`
        0) back
        1) create bandmember
        2) delete bandmember
        ----------------------
        ${bandInfo}
        `)
    }

    displayBands() {
        let bandString = '';
        for (i = 0; i < this.band.length; i ++) {
            teamString += i + ') ' + this.band[i].name + 'n';
        }
        alert(bandString);
    }

    createBand() {
        let name = prompt('Enter name for new team:');
        this.band.push(new band(name));
    }

    viewBand() {
        let index = prompt('Enter the index of the band you wish to view:');
        if (index > -1 && index < this.band.length) {
            this.selectedband = this.band[index];
            let description = 'band Name: ' + this.selectedband.name + '/n';
            
            for (let i = 0; i < this.selectedband.bandmembers.length; i++) {
                description += i + ') ' + this.selectedband.bandmembers[i].name
                 + ' - ' +this.selectedband.bandmembers[i].position + '/n';
            }

            let selection = this.showbandMenuOptions(description)
            switch (selection) {
                case '1':
                    this.createbandmember();
                    break;
                case '2':
                    this.deletebandmember();
            }
        }
    }

    deleteBand() {
        let index = prompt('Enter the index of the team you wish to delete:');
        if (index > -1 && index < this.bands.length) {
            this.bands.splice(index, 1);
        }
    }

    createBandmember() {
        let name = prompt('Enter name for new player:');
        let position = prompt('Enter position for new player:');
        this.selectedband.bandmembers.push(new bandmember(name, position));
    }

    deletePlayer() {
        let index = prompt('Enter the index of the player you wish to delete:')
        if (index > -1 && index < this.selectedband.bandmembers.length) {
            this.selectedband.bandmembers.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();