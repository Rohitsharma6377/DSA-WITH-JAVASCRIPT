// Hinglish Notes (Arrays in Rust):
// - Rust me fixed-size arrays [T; N] aur growable vectors Vec<T> hote hain.
// - Index access O(1), push/pop Vec ke end par amortized O(1).
//
// Basic Question: Reverse a vector in-place
// Approach: Do pointers (i,j) use karke swap karte jaiye.

pub fn reverse_in_place<T: Clone>(v: &mut Vec<T>) {
    let mut i = 0usize;
    if v.is_empty() { return; }
    let mut j = v.len() - 1;
    while i < j {
        v.swap(i, j);
        i += 1; j -= 1;
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_reverse() {
        let mut v = vec![1,2,3,4,5];
        reverse_in_place(&mut v);
        assert_eq!(v, vec![5,4,3,2,1]);
    }
}
