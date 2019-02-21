const Mutations = {
    async createItem(parent, args, ctx, info) {
        //TODO check login
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);
        console.log(item);
        return item;
    },
    //createDog(parent, args, ctx, info){
    //create a dog!
    //    console.log(args)
    //}
    updateItem(parent, args, ctx, info) {
        //first take a copy of the updates
        const updates = { ...args };
        //remove the id from the updates
        delete updates.id;

        //run the update
        return ctx.db.mutation.updateItem({
            data: updates,
            where: {
                id: args.id,
            },
        }, info
        );
    },
    async deleteItem(parent, args, ctx, info) {
        const where = { id: args.id };
        //find the item
        //check permissions
        //delete
        const item = await ctx.db.query.item({ where } , `{id title}`);

        return ctx.db.mutation.deleteItem({ where }, info)
    }
};

module.exports = Mutations;
