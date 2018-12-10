my @text = "input.txt".IO.slurp.comb;

my $sum = 0;
my $counter = 0;

for @text -> $symbol {
  $sum++ if $symbol eq "(";
  $sum-- if $symbol eq ")";
  $counter++; 
  put "counter: $counter" if $sum == -1;
}
put "sum: $sum";