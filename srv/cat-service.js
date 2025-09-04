const cds = require('@sap/cds');

module.exports = (srv) => {
    srv.on('READ', 'Cats', async (req) => {
        const db = await cds.connect.to('db');
        const results = await db.read('Cats');
        return results;
    });

    srv.on('CREATE', 'Cats', async (req) => {
        const db = await cds.connect.to('db');
        const newCat = req.data;
        await db.insert('Cats', newCat);
        return newCat;
    });

    srv.on('UPDATE', 'Cats', async (req) => {
        const db = await cds.connect.to('db');
        const updatedCat = req.data;
        await db.update('Cats', updatedCat);
        return updatedCat;
    });

    srv.on('DELETE', 'Cats', async (req) => {
        const db = await cds.connect.to('db');
        const catId = req.data.ID;
        await db.delete('Cats', catId);
        return { message: 'Cat deleted successfully' };
    });
};