import React from 'react';
import Item from './item';

function App() {
  return (
    <div>
      <Item
        backgroundColor="pink"
        title="Cheetah"
        subtitle="58mph"
        information="The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal and has several adaptations for speed, including a light build, long thin legs and a long tail."
      />

      <Item
        backgroundColor="purple"
        title="Lion"
        subtitle="50mph"
        information="The lion is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane, which is the most recognisable feature of the species."
      />

      <Item
        backgroundColor="red"
        title="Tigar"
        subtitle="30-40mph"
        information="The tiger is the largest extant cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar."
      />

      <Item
        backgroundColor="orange"
        title="Polar Bear"
        subtitle="25mph"
        information="The polar bear is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is a large bear, approximately the same size as the omnivorous Kodiak bear."
      />

      <Item
        backgroundColor="yellow"
        title="Tortoise"
        subtitle=".63mph"
        information="Tortoises are reptile species of the family Testudinidae of the order Testudines. They are particularly distinguished from other turtles by being land-dwelling, while many other turtle species are at least partly aquatic. Like other turtles, tortoises have a shell to protect from predation and other threats.."
      />

      <Item
        backgroundColor="green"
        title="Horse"
        subtitle="55mph"
        information="The horse is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today."
      />

      <Item
        backgroundColor="blue"
        title="Elephant"
        subtitle="25"
        information="Elephants are mammals of the family Elephantidae and the largest existing land animals. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. Elephantidae is the only surviving family of the order Proboscidea; extinct members include the mastodons. "
      />

      <Item
        backgroundColor="magenta"
        title="Deer"
        subtitle="37-50mph"
        information="Deer are the hoofed ruminant mammals forming the family Cervidae. The two main groups of deer are the Cervinae, including the muntjac, the elk, the fallow deer, and the chital; and the Capreolinae, including the reindeer, the roe deer, and the moose."
      />

      <Item
        backgroundColor="teal"
        title="Mouse"
        subtitle="8mph"
        information="A mouse, plural mice, is a small rodent characteristically having a pointed snout, small rounded ears, a body-length scaly tail, and a high breeding rate. The best known mouse species is the common house mouse. It is also a popular pet. In some places, certain kinds of field mice are locally common."
      />

      <Item
        backgroundColor="salmon"
        title="Turkey"
        subtitle="25-50mph"
        information="The turkey is a large bird in the genus Meleagris, which is native to the Americas. The genus has two extant species: the wild turkey of North America and the ocellated turkey. Males of both turkey species have a distinctive fleshy wattle or protuberance that hangs from the top of the beak."
      />
    </div>
  )
}

export default App;