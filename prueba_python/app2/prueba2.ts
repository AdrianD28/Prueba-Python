export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let item of this.items) {
            this.updateItemQuality(item);
        }
        return this.items;
    }

    private updateItemQuality(item: Item) {
        switch (item.name) {
            case 'Aged Brie':
                this.updateAgedBrie(item);
                break;
            case 'Backstage passes to a TAFKAL80ETC concert':
                this.updateBackstagePasses(item);
                break;
            case 'Sulfuras, Hand of Ragnaros':
                // No action needed for Sulfuras
                break;
            case 'Conjured':
                this.updateConjured(item);
                break;
            default:
                this.updateNormalItem(item);
                break;
        }
        this.updateSellIn(item);
    }

    private updateNormalItem(item: Item) {
        if (item.quality > 0) {
            item.quality -= item.sellIn < 0 ? 2 : 1;
        }
        item.quality = Math.max(0, item.quality);
    }

    private updateAgedBrie(item: Item) {
        if (item.quality < 50) {
            item.quality += 1;
        }
    }

    private updateBackstagePasses(item: Item) {
        if (item.quality < 50) {
            item.quality += 1;
            if (item.sellIn < 11) item.quality += 1;
            if (item.sellIn < 6) item.quality += 1;
            if (item.sellIn < 0) item.quality = 0;
        }
    }

    private updateConjured(item: Item) {
        if (item.quality > 0) {
            item.quality -= item.sellIn < 0 ? 4 : 2;
        }
        item.quality = Math.max(0, item.quality);
    }

    private updateSellIn(item: Item) {
        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.sellIn -= 1;
        }
    }
}
