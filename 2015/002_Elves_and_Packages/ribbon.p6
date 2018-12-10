my @sizes = "input.txt".IO.slurp.lines.map({$^a.split("x")});

sub minPerimeter ($a, $b, $c) {
  # [*] (($a, $b, $c) (-) ($a, $b, $c).max);
  return 2  * min (
    $a + $b, $b + $c, $a + $c
  );
}

sub ribbon ($a, $b, $c) {
  minPerimeter($a, $b, $c) + [*] ($a, $b, $c)
}

say [+] @sizes.map({ ribbon(|@^a) } );